"use client";
import React, { useEffect, useState } from 'react';
import { quotes } from '../lib/utils/quotes';

const RandomQuote = () => {
    const [quote, setQuote] = useState("");
    const [isLoading, setIsLoading] = useState(true); // New state variable for loading state

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
        setIsLoading(false); // Set loading to false after setting the quote
    }, []);

    return (
        <div className="quote-container p-4 max-w-4xl mx-auto z-50">
            {isLoading ? (
                <p className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-100">Carregando...</p>
            ) : (
                <p className="quote text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold italic text-gray-100">
                    {`"${quote}"`}
                </p>
            )}
        </div>
    );
};

export default RandomQuote;
