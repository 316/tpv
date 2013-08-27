#-*- encoding: utf-8 -*-

def consultar():
    fuente=db(db.articulos.id>0).select()
    tabla=plugins.powerTable
    tabla.datasource=fuente
#    tabla.uitheme='cupertino'
    tabla.dtfeatures['sScrollY']='100%'
    tabla.keycolumn='articulos.id'
    tabla.showkeycolumn=False
    tabla.headers='labels'
    return dict(tabla=tabla.create())

def listado():

    return dict(listado=db(db.articulos.id>0).select())

def vender():
    return dict()

def cargar():
    agregar=SQLFORM(db.articulos)
    
    if agregar.process().accepted:
        response.flash="Se ha cargado el articulo"
    elif agregar.errors:
        response.flash="Por favor revise los datos"
    return dict(agregar=agregar) 
        
def nuevo():
    form=SQLFORM(db.articulos)

    if form.process().accepted:
        response.flash="Se ha cargado el articulo"
    elif form.errors:
        response.flash="Por favor revise los datos"
    return dict(form=form) 