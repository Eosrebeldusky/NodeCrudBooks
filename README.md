# NodeCrudBooks
#A simple but effective Crud, for books(title, author, ISBN)
#Remeber to have mongoDB - Mongoose. (I use compass to check everything works)
#how to use it - 
#Run mongod 
#open postman on route:http://localhost:5000/books/ - this is main get All books.
#Post Format: {"title":"default", "isbn":"00000","author":"defaultauthor name"}
#get a single book: http://localhost:5000/books/00000 - Here you put the ISBN.
#ISBN is your main id to operate this CRUD.
#Put http://localhost:5000/books/00000 - And update any value.
#ALWAYS USE json. Make Sure you re using json to post.
