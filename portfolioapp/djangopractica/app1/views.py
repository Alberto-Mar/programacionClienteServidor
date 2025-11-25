from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Usuario
# Create your views here.

class HomeView(TemplateView):
    template_name = "plantillas/home.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['usuarios'] = Usuario.objects.all()
        return context