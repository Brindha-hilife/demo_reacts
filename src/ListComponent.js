import React from 'react';
import './App.css';
 
//jQuery libraries
import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
 

function ListComponent() {
 
   
    //initialize datatable
    $(document).ready(function () {
        setTimeout(function(){
        $('#example').DataTable({
          language: {search: '', searchPlaceholder: "Search..."},
          lengthMenu: [25, 50, 100, 200, 500, 1000],
          // overflow-X: true
        });
         } ,1000);
    });
  
 
    //Datatable HTML
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center">
          <h3>LaraTutorials.com</h3>
      </div>
       
      <div className="container">
           
          <table id="example" class="table table-hover table-bordered responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
          {/* {this.state.data.map((result) => {
            return (
              
                 <tr>
                  <td>{result.id}</td>
                  <td>{result.email}</td>
                  <td>{result.username}</td>
                </tr>
              
            )
          })}
             */}
             <tr>
              <td>asdfsa</td>
              <td>asdfsa</td>
              <td>asdfsa</td>
             </tr>
             <tr>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
             </tr>
             <tr>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
             </tr>
             <tr>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
             </tr>
             <tr>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
             </tr>
             <tr>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
             </tr>
             <tr>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
             </tr>
             <tr>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
             </tr>
             <tr>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
             </tr>
             <tr>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
             </tr>
             <tr>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
             </tr>
             <tr>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
              <td>safjhjsadhf</td>
             </tr>

          </tbody>
        </table>
           
        </div>
      </div>
  );
 }

export default ListComponent;
