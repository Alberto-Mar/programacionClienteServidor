class Alumno:
    def __init__(self, nombre):
        self.nombre = nombre
        
    def matricularse(self):
        return f"{self.nombre} Se ha matriculado"
a = Alumno("Pedro")

print(a.apellido)
print(a.saludar())
