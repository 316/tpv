Terminal de Punto de Venta (TPV)
================================

Tiene un nombre muy original, y basicamente es para control de stock y ventas en pequeños negocios.

Features
========

* Control de Stock (10%)
* Carga de compras (40%)
* Control de ventas (10%)
* Gestion de operadores
* Sistema de autenticacion y permisos basados en roles (permisos y grupos)
* Cierres de caja diarios
* Informes de venta diarios, semanales, mensuales, trimestrales, semestrales, anuales, etc.

TODO
====

Todo, aunque basicamente y en detalle:

- Carga de articulos en stock
- Operaciones de 

  * ventas
  
    - Auto conteo de items
    - calculo de subtotal
    - calculo de total
    - calculo de vuelto

  * devoluciones
  
    - reingreso de articulos en stock
    - emision de nota de credito

  * cambio
    
    - No se hacen

- Alta y modificacion de stock
- Cierres diarios
- Definición de cantidad minima de articulo
- Notificaciones varias
- y mas

Instalacion
===========

Esta realizado utilizando el framework web2py, por lo cual solo es necesario clonar este repositorio en web2py/applications, luego visitamos http://localhost:8000/tpv et voíla!
