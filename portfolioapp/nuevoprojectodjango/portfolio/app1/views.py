from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Proyecto

class HomeView(TemplateView):
    template_name = 'portfolio/home.html'
    
    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)
        cat_id = kwargs.get('cat_id')
        context['proyectos'] = Proyecto.objects.filter (categorias_id=cat_id) if cat_id else Proyecto.objects.all()
        return context

class ProyectoView(TemplateView):
    template_name = 'portfolio/proyecto.html'
    
    def get_context_data(self, **kwargs):
        context = super(ProyectoView, self).get_context_data(**kwargs)
        context['proyecto'] = Proyecto.objects.get(id=kwargs['pk'])
        return context

class ListaProyectos(TemplateView):
    template_name = 'portfolio/listaproyectos.html'
    
    def get_context_data(self, **kwargs):
        context = super(ListaProyectos, self).get_context_data(**kwargs)
        context['proyectos'] = Proyecto.objects.all()
        return context

class ContactoView(TemplateView):
    template_name = 'portfolio/contacto.html'