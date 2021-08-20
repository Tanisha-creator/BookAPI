const express = require("express");

// Database
const database = require("./database");
//initialisation
const booky = express();

/* 
Route        =>   "/" root route
Description  =>   GET all books
Access       =>   PUBLIC
Parameter    =>   NONE
Methods      =>   GET
*/ 
booky.get("/", (req, res) => {
    return res.json({books : database.books});
});

/* 
Route        =>   "/" 
Description  =>   GET specific book based on ISBN 
Access       =>   PUBLIC
Parameter    =>   ISBN
Methods      =>   GET
*/ 
booky.get("/:isbn", (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn);
        if(getSpecificBook.length ===0){
            return res.json({ 
                error: `No book found for the ISBN of ${req.params.isbn}`,});
            }
            return res.json({book: getSpecificBook});
    });
booky.listen(3000, () => 
    console.log("Server running succesfully 😁")
);