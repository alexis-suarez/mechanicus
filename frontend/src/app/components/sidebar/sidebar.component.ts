import { Component, OnInit } from '@angular/core';

// Variables for jQuery
declare var $: any;
declare var $jQuery: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public show(): void {
    $jQuery(document).ready( function() {
      $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
      });
    });
  }

}
