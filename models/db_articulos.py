#! -*- encoding: utf-8 -*-

db.define_table('categorias',
    Field('nombre'),
    format= lambda r: r.nombre
    )


db.define_table('articulos',
    Field('codigo'), 
    Field('nombre'),
    Field('categoria',requires=IS_IN_SET(['Gaseosa','Golosina','Lacteos','Panaderia','Limpieza','Higiene personal'])),
    Field('precio'),
    Field('existencia')
    )