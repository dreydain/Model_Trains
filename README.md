<h1>Model Trains</h1>
A business management tool, that helps users keep accurate stock counts on all products for multiple businesses.
It also keeps track of the manufacturing process for individual product orders.
<ul>
  <li>When an order is recieved, users can create a workorder to fulfill customer orders.</li>
  <li>When a workorder is created, each product's order quantity is deducted from the products total stock.</li>
  <li>Workorders will reflect how much of the quantity is available to ship, and how many need to be made.</li>
  <li>At the bottom of the work order is manufacturing tracker for each product in the order, and can be updated by employees.</li>
</ul>

<h2>Motivation</h2>
I needed a solo capstone project for Coding Dojo, and my Aunt and Uncle needed a tool to help them better manage product for their Model Train Businesses.


<h2>Build status</h2>
<ul>
  <li>Build Backend Model, Controller, and Route to update individual order items objects, for manufacturing progress.</li>
  <li>Create a function that tallies the total order quantity and appropriately display it in the workorder dashboard.</li>
  <li>Discuss Staff Dashboard with TJ Model Trains to further refine and complete. (If not removing any feature in the Staff Dashboard, create a function that if no      end date is added the staffs end date will stay Present)</li>
  <li>Create a Feature that will allow TJ Model Trains to print the workorders.</li>
  <li>Build User Authorization and Login Security</li>
  <li>Build Protected routes.</li>
  <li>Create a image upload feature, so that TJ Model Trains can upload product images from their computer.</li>
  <li>Fix Bug in window confirm when deleting.</li>
</ul>

<h2>Tech/framework used</h2>
<h3>Backend:</h3>
<ul>
  <li>MongoDB</li>
  <li>Express</li>
  <li>Node</li>
  <li>Mongoose</li>
</ul>

<h3>Frontend:</h3>
<ul>
  <li>React</li>
  <li>React-Router</li>
  <li>Bootstrap/Boostswatch</li>
  <li>Redux</li>
</ul>

<h2>Installation</h2>
<ul>
  <li>Fork Repository</li>
In Model_Trains root directory/folder:
  <li>npm install // installs all dependencies</li>
  <li>npm data:import // imports starter data, users and products</li>
  <li>npm run dev // starts both client and server</li>
</ul>

