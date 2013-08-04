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

def cargar():
    return dict()

def nuevo():
    form=SQLFORM(db.articulos)

    if form.process().accepted:
        response.flash="Se ha cargado el articulo"
    elif form.errors:
        response.flash="Por favor revise los datos"
    return dict(form=form) 