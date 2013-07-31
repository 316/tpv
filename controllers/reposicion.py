#! -*- encoding: utf-8 -*-

def articulos():
    form = SQLFORM.grid(db.articulos, ui='jquery-ui', user_signature=False)
    return dict(form=form)

def nuevo():
    form = SQLFORM(db.articulos)
    if form.process().accepted:
        response.flash = 'Se ha agregado el articulo'
    elif form.errors:
        response.flash = 'El formulario tiene errores'
    else:
        response.flash = 'Por favor complete los datos'

    return dict(form=form)