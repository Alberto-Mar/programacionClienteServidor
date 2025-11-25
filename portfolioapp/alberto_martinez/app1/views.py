# Autor: Alberto Martínez
from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.
# A2.1 vistas de contacto y principal

class PrincipalView(TemplateView):
    template_name = "principal.html"
    
class ContactosView(TemplateView):
    template_name = "contactos.html"