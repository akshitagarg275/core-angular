import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

import {AppModule} from './app/app.module'

// need to provide bootstrapping file which is the initial file
platformBrowserDynamic().bootstrapModule(AppModule)