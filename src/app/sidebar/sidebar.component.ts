import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items: any[] = [
    { icon: 'notifications', label: 'Notifications' },
    { icon: 'security', label: 'Security' },
    { icon: 'brightness_medium', label: 'Theme' },
    { icon: 'wallpaper', label: 'Chat Wallpaper' },
    { icon: 'block', label: 'Blocked' },
    { icon: 'desktop_windows', label: 'Desktop Settings' },
    { icon: 'brightness_auto', label: 'Keyboard Shortcuts' },
    { icon: 'help', label: 'Help' }
  ];
}

