import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sub';
  items = [
    {
      cost:"Free",
      price: 0,
      time:"/month",
      user:"Single User",
      storage:"5GB STORAGE",
      activities:"Unlimited Public Projects",
      access:"Community Access",
      value:true,
      projects:"Unlimited Private Projects",
      value1:true,
      support:"Dedicated Phone Support",
      value2:true,
      domain:"Free Subdomain",
      value3:true,
      report:"Monthly Status Reports"
    },
    {
      cost:"PLus",
      price: 9,
      time:"/month",
      user:"5 User",
      storage:"50GB STORAGE",
      activities:"Unlimited Public Projects",
      access:"Community Access",
      value:false,
      projects:"Unlimited Private Projects",
      value1:false,
      support:"Dedicated Phone Support",
      value2:false,
      domain:"Free Subdomain",
      value3:true,
      report:"Monthly Status Reports"
    },
    {
      cost:"Pro",
      price: 49,
      time:"/month",
      user:"Unlimited User",
      storage:"150GB STORAGE",
      activities:"Unlimited Public Projects",
      access:"Community Access",
      value:false,
      projects:"Unlimited Private Projects",
      value1:false,
      support:"Dedicated Phone Support",
      value2:false,
      domain:"Unlimited Free Subdomain",
      value3:false,
      report:"Monthly Status Reports"
    },
  ]
}
