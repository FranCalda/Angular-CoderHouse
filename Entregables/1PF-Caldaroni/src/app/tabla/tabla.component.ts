import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CargaComponent } from '../carga/carga.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'categoria', 'fecha', 'estado', 'precio', 'comentario', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTodosLosProductos();
  }

  abrirCarga() {
    this.dialog.open(CargaComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getTodosLosProductos();
      }
    })
  }

  getTodosLosProductos() {
    this.api.getProducto()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert('Error al obtener los productos')
        }
      })
  }

  editarProducto(row: any) {
    this.dialog.open(CargaComponent, {
      width: '30%',
      data:row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getTodosLosProductos();
      }
    })
  }

  borrarProducto(id:number) {
    this.api.deleteProducto(id)
      .subscribe({
        next: (res) => {
          alert("Producto eliminado exitosamente"),
            this.getTodosLosProductos();
        },
        error: () => {
          alert("No se ha podido eliminar");
        }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
