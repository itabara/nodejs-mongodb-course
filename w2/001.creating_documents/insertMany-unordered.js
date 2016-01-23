db.books.insertMany(
    [
        {
	    "_id" : "001",
	    "title" : "Book 1",
	    "year" : 1981	    
        },
        {
	    "_id" : "002",
	    "title" : "Book 2",
	    "year" : 1986	    
        },
        {
	    "_id" : "001",
	    "title" : "Book X",
	    "year" : 1983	    
        },
        {
	    "_id" : "003",
	    "title" : "Book 3",
	    "year" : 1983   
        }
    ],
    {
        "ordered": false 
    }
);
