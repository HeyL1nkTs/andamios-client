import { Routes } from "@angular/router";
import { LandingComponent } from "./conten.component";
import { AboutUsComponent } from "./rutas/aboutUs/aboutUs.component";
import { ManufactureComponent } from "./rutas/manufacture/manufacture.component";
import { DesignAndEngineringComponent } from "./rutas/desingAndEnginerng/desingAndEnginerng.component";
import { ProductsComponent } from "./rutas/products/products.component";
import { CertificationsComponent } from "./rutas/certifications/certifications.component";

export const routes : Routes = [
  { path: '', component: LandingComponent, children: [
    { path: '', component: AboutUsComponent },
    { path: 'Manufactura', component: ManufactureComponent },
    { path: 'DiseñoEIngenieria', component: DesignAndEngineringComponent },
    { path: 'Productos', component: ProductsComponent },
    { path: 'Certificaciones', component: CertificationsComponent },
    
  ]}
]

