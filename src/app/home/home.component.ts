import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public inquiresClicked = false;

  constructor() { }

  ngOnInit(): void {

    // TODO:  more efficient way of changing background colors
    // const boxes = Array.from(document.getElementsByClassName('box') as HTMLCollectionOf<HTMLElement>);
    // boxes.forEach(box => {
    //   box.addEventListener("mouseover", function(event) {
    //     if (rectangle1 != null){
    //       rectangle1.style.backgroundColor = 'blue';
    //     }
    //   })
    // })

    const rectangle1 = document.getElementById('rectangle1');
    const rectangle2 = document.getElementById('rectangle2');
    const rectangle3 = document.getElementById('rectangle3');
    const rectangle4 = document.getElementById('rectangle4');
    const rectangle5 = document.getElementById('rectangle5');

    if (rectangle1 != null){
      rectangle1?.addEventListener("mouseover", function(event) {
        rectangle1.style.backgroundColor = '#f3e9dc';
        rectangle1.style.transition = '.5s';
    })
      rectangle2?.addEventListener("mouseover", function(event) {
          rectangle1.style.backgroundColor = '#faa007';
      })
      rectangle3?.addEventListener("mouseover", function(event) {
        rectangle1.style.backgroundColor = '#e29d99';
      })
      rectangle4?.addEventListener("mouseover", function(event) {
        rectangle1.style.backgroundColor = '#95bfc0';

      })
      rectangle5?.addEventListener("mouseover", function(event) {
        rectangle1.style.backgroundColor = '#fec876';
      })
    } 
  }

  goToInquires(){
    this.inquiresClicked = true;
  }

}
