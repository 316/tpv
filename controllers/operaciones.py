#-*- encoding: utf-8 -*-

def consultar():
    fuente=db(db.articulos.id>0).select()
    tabla=plugin_powerTable(fuente)
    tabla.uitheme='redmond'
    return dict(tabla=tabla)

def listado():

    return dict(listado=db(db.articulos.id>0).select())

def vender():
    return dict()