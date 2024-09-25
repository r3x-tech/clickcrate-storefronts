import express from "express";
import { z } from "zod";
import axios from "axios";
import { PublicKey, Connection, clusterApiUrl } from "@solana/web3.js";
import { ActionGetResponse, ACTIONS_CORS_HEADERS_MIDDLEWARE } from "@solana/actions";

const router = express.Router();
const CLICKCRATE_API_URL = process.env.CLICKCRATE_API_URL;


// Step 1: Choose product type
router.get("/", (req, res) => {
    console.log(req.query)
    const payload: ActionGetResponse = {
        icon: "https://shdw-drive.genesysgo.net/CiJnYeRgNUptSKR4MmsAPn7Zhp6LSv91ncWTuNqDLo7T/autofill_checkout_button_bottom.png",
        label: "Choose a product",
        type: "action",
        title: "Product aggregator",
        description: "A blink that allows you to aggregate multiple products",
        links: {
            actions: [
                {
                    href: "/api/products/shirt",
                    label: "Shirt"
                }
            ]
        }
    }
    res.status(200).json(payload);
});

export default router;
