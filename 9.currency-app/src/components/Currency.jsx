import { useState } from "react";
import React from "react";
import axios from "axios";

const currencies = ["USD", "EUR", "TRY", "GBP", "JPY"];

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_Fu2uCl3lRC5NwgpBvs60PIMtHYhzw93e5y0xvACm";

export default function CurrencyConverter() {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('TRY');
    const [toCurrency, setToCurrency] = useState('USD');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        if (!response.data || !response.data.data) {
            console.error("Invalid response from API");
            return;
        } else {
            const result = (response.data.data[toCurrency] * amount).toFixed(2);
            setResult(result);
        }

    }

    return (
        <div className="w-[500px] mx-auto mt-10 bg-white shadow-lg p-6 rounded-2xl">
            <h1 className="text-2xl font-bold mb-6 text-center  ">Currency Converter</h1>

            <div className="mb-4">
                <label className="block mb-1 font-semibold">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-1 font-semibold">From</label>
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    >
                        {currencies.map((cur) => (
                            <option key={cur} value={cur}>
                                {cur}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-semibold">To</label>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                    >
                        {currencies.map((cur) => (
                            <option key={cur} value={cur}>
                                {cur}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                onClick={exchange}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Convert
            </button>
            {result && (
                <div className="mt-4 text-center text-lg font-semibold text-green-600">
                    {amount} {fromCurrency} = {result} {toCurrency}
                </div>
            )}
        </div>
    );
}
