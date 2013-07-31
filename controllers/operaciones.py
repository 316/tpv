#!-*- encoding: utf-8 -*-

def consultar():
    fuente=db(db.articulos.id<0).select()
    tabla=plugins.powerTable
    tabla.datasource=db.articulos
    return dict(tabla=plugin_powerTable(fuente))
    