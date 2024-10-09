import { ActionParameterSelectable, ActionParameterType, FieldMapping } from "../models/schemas";

export const convertToLabel = (key: keyof FieldMapping, fieldMapping: FieldMapping) => {
    return fieldMapping[key] || key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
};

export const getParameters = (restQueryParams: Record<string, any>, fieldMapping: FieldMapping) => {
    const parameters: ActionParameterSelectable<ActionParameterType>[] = Object.keys(restQueryParams).map((paramKey) => {
        const label = convertToLabel(paramKey as keyof FieldMapping, fieldMapping);
        let type: ActionParameterType = "text"; // Default type
      
        if (paramKey.toLowerCase().includes("email")) {
          type = "email";
        } else if (paramKey.toLowerCase().includes("zip") || paramKey.toLowerCase().includes("postal")) {
          type = "text";
        }
      
        return {
          name: paramKey,
          label,
          type,
          required: true,
        } as ActionParameterSelectable<ActionParameterType>;
      });
      return parameters
}