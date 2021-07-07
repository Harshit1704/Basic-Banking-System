# Basic-Banking-System
<ul>
<li>Create a simple dynamic website which has the following specs.</li>
<li>Start with creating a dummy data in database for upto 10 customers. Database options: Mysql, Mongo, Postgres, etc.</li>
<li>Customers table will have basic fields such as name, email,current balance etc. Transfers table will record all transfers happened.</li>
<li>Flow: Home Page > View all Customers > Select and View one Customer > Transfer Money > Select customer to transfer to > View all Customers.</li>
<li>No Login Page. No User Creation. Only transfer of money between multiple users.</li>
</ul>

## How to run :
<ul>
<li>Clone the repository into your local system</li>
<li>Start your mongo and mongoDB from the <b><i>WIndows Powershell</b></i></li>
<li>Open VS Code in the directory and in it open a new terminal</li>
<li>After that you have to start the server using Nodemon. Type the following command in your terminal to start the server :</li>
<pre><b>npm run dev</b></pre>
<li>A message will be displayed like this :</li>
<pre><b>[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,ejs
[nodemon] starting `node src/index.js index.js`
Welcome to the Server
Connection successfull</b></pre>
<li>Now you have successfully started the server. Now you can see the website in your browser.</li>
<li>Go to your browser and type the following:</li>
<pre><b>http://localhost:3000/</b></pre>
<li>Now you can see our website</li>
</ul>
