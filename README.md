# Hey Gilad, Tal, Merav & Jonathan :)
Before starting your homework (hehe), please make sure you have removed autopublish package from meteor
by typing "meteor remove autopublish" - Without removing this package all your data will be automatically subscribed to the client
and, well, thats cheating :)

Homework:
 - Finish the delete feature (except of Tal, all of you need to do it).
 - Add Edit Todo.
 - Add List Collection that will holds the todo items. (See remarks at buttom)****
 - Enable to add new list
 - Enable to add new todos to certain list.
 - Refactor ListPage that will be actually a list page - will show ONLY the todos that were inserted to the list.
 - Refactor main layout to present all the lists that were created.

****
You can choose how you handle the List - Todos relations, there are 3 common way to deal with it:
- Make 1 Collection named List, and keep array of todos objects (you will have 1 Collection with this approach).
- Make 2 Collections, List and Todos - save on each list an array of "todoId" that belongs to the list.
- Make 2 Collections, List and Todos - save on each Todo the listId that he belongs to.

I'll choose at this case going with option 3, but you can think of the pros/cons for each way to go and decide on your own.
