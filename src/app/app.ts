import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header"
import { Skills } from "./skills/skills";
import { Education } from "./education/education"
import { Hobbies } from "./hobbies/hobbies"
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Skills, Education, Hobbies, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('activity');
}
