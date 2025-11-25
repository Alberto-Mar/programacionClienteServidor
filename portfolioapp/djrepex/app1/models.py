from django.db import models

# Create your models here.

class Usuario(models.Model):
    nombre = models.CharField(max_length=100, verbose_name="Nombre", null=False, blank=False)
    email = models.EmailField(verbose_name="Correo Electrónico", null=False, blank=False, unique=True)
    fecha_registro = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Registro")
    numero_telefono = models.CharField(max_length=15, verbose_name="Número de Teléfono", null=True, blank=True)
