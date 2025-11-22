import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PoMenuItem, PoModule } from '@po-ui/ng-components';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PoModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  constructor(private proAppConfigService: ProAppConfigService) { }

  ngOnInit(): void {
    console.log('Protheus Lib Core initialized');
  }

  private onClick() {
    alert('Clicked in menu item');
  }
}
