import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		loadChildren: 'src/app/components/home/home.module#homeModule'
	},
	{
		path: 'login',
		loadChildren: 'src/app/components/login/login.module#loginModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
