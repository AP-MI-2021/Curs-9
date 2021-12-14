import { Localitate } from './localitate.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-localitate',
  templateUrl: './localitate.component.html',
  styleUrls: ['./localitate.component.css'],
})
export class LocalitateComponent implements OnInit {
  @Input() localitate: Localitate;
  constructor() {}

  ngOnInit(): void {}
}
