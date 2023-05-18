import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-each',
  templateUrl: './for-each.component.html',
  styleUrls: ['./for-each.component.scss']
})
export class ForEachComponent implements OnInit {
  ngOnInit(): void {
    this.convertToTitleCase();
  }

  words: string[] = ['hello', 'bird', 'table', 'football', 'pipe', 'code'];
  Words: string[] = [];

  convertToTitleCase() {
    this.words.forEach(word => {
      const Word = word.charAt(0).toUpperCase() + word.slice(1);
      this.Words.push(Word);
    });
  }



}
