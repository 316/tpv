#! -*- encoding: utf-8 -*-

db.define_table('categorias',
    Field('nombre'),
    format= lambda r: r.nombre
    )


db.define_table('articulos',
    Field('codigo'),
    Field('nombre'),
    Field('categoria',db.categorias),
    Field('precio'),
    Field('existencia')
    )