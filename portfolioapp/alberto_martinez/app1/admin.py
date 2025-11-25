# Autor: Alberto Martínez
from django.contrib import admin
from .models import Usuario, Coche
# Register your models here.
# A4.1 modificacion para poder crear las clases siendo admin
admin.site.register(Usuario)
admin.site.register(Coche)
