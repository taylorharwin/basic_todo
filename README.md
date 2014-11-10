basic_todo
==========
A basic todo list app, entirely client-side, written in AngularJS and Bootstrap. 

##Overview 

The repo consists of:

client/: contains app.js file to bootstrap the Angular app. Also Controllers, Services, and Directives directories, each with one javascript file. 

  Controllers: The app has one controller. The controller is reponsible for keeping track of the overall list of things to do, as well as a parallel list of deleted things to do. It has minimal logic.
  
  Directives: The layout and behavior for an individual item to do is contained in a custom directive. This made sense given that the app would have many repeated to-dos, all with idential functionality. 
  
  Services: There is one service that interfaces with the local storage API, and is injected into

bower.json: The third-party dependencies for this app are bootstrap (only CSS is used), and AngularJS

index.html: Loads all required scripts, and templates. 

Because this app was designed to run entirely client-side, the partial template for my directive is included in a script tag inside index.html. This is necessary because Chrome disables request using the 'file://' protocol. So, all templates have to be served from the same file.

For more detailed technical documentation, please read through the source files for the project. There is quite a bit of inline commentary.



##Installation 

(Assumes you have Bower installed)

1. Clone this repository locally and `cd` into it
2. Run 'bower install' from the command line.
3. Open 'index.html', from the top-level directory, in any modern web browser


###Use

The user interface is intended to be self-exaplanatory, so there is minimal instructional text in the app. A user is presented with a text field for adding a task, a dropdown, for marking priority, and a 'submit' button for posting a task. 

(New users have a sample task demonstrating what a task looks like)

All tasks have three functionalities: Edit, Mark Complete, Delete

Edit: Makes the text of a task editable. Reveals a "confirm" button to post new changes
Delete: Throws a confirmation alert, and then removes a task from the list. Reveals a "restore" button to reinsert deleted tasks. Deleted tasks do not persist through sessions
Mark Complete: Changes the status of a task to complete. Reveals a "reopen" button. users can edit and delete tasks that have been marked as complete. This is debatable, but seemed reasonable in terms of assuming the best of a user.


###Tests
(Assumes you have mocha installed globally)



###Contact
If you have any questions or concerns, you can reach the developer at taylor.harwin@gmail.com, or on Twitter: @taylorharwin
