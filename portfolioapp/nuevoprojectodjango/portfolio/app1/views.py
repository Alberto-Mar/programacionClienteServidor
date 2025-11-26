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
        proy_pag = 10
        num_pag = 4
        context = super().get_context_data(**kwargs)
        query = self.request.GET.get("query", "")
        if query:
            context["proyectos"] = Proyecto.objects.filter(titulo__icontains=query)
        else:
            context["proyectos"] = Proyecto.objects.all()
        
        marcado_vista = self.request.GET.get("marcado", "")
        if marcado_vista == "true":
            context["usuarios"] = context["usuarios"].order_by("titulo")
        context["marcado"] = marcado_vista
         
        context["query"] = query
        return context

class ContactoView(TemplateView):
    template_name = 'portfolio/contacto.html'