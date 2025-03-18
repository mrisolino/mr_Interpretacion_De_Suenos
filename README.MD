# **Intérprete de Sueños**

![Banner](https://via.placeholder.com/800x200?text=Interprete+de+Sueños)  
*(Reemplaza esta URL con una imagen personalizada si deseas agregar un banner visual al repositorio)*

---

## **Descripción**

Este proyecto es una aplicación web interactiva que interpreta sueños utilizando inteligencia artificial. Los usuarios pueden describir sus sueños en un cuadro de texto, y la aplicación generará una interpretación creativa basada en el modelo de lenguaje proporcionado por [OpenRouter AI](https://openrouter.ai).

La interfaz está diseñada para ser intuitiva y visualmente atractiva, con soporte para modo oscuro/claro, animaciones suaves y un video de fondo dinámico.

---

## **Características Principales**

- **Interpretación de Sueños**: Genera significados creativos y sintetizados para los sueños descritos por el usuario.
- **Modo Oscuro/Claro**: Cambia entre modos de visualización para adaptarse a las preferencias del usuario.
- **Animaciones**: Incluye efectos visuales como animaciones de carga y transiciones suaves.
- **Diseño Responsive**: Compatible con dispositivos móviles y escritorios.
- **API de IA**: Utiliza un modelo avanzado de lenguaje para interpretar los sueños.

---

## **Tecnologías Utilizadas**

### **Frontend**
- **React.js**: Biblioteca principal para construir la interfaz de usuario.
- **Tailwind CSS**: Framework de estilos para diseño rápido y personalizable.
- **Lucide React**: Iconos minimalistas y modernos.
- **Fetch API**: Para realizar solicitudes HTTP a la API de OpenRouter.

### **Backend (Externo)**
- **OpenRouter AI**: Servicio de API que utiliza modelos de lenguaje avanzados para generar respuestas.

### **Multimedia**
- **Video de Fondo**: Un archivo MP4 utilizado como fondo dinámico.

---

## **Instalación y Ejecución**

### **Prerrequisitos**
1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema.
2. Necesitarás una clave API de [OpenRouter AI](https://openrouter.ai). Regístrate en su plataforma para obtener una.

### **Pasos para Configurar el Proyecto**

1. **Clona el Repositorio**
   ```bash
   git clone https://github.com/mrisolino/mr_interprete-de-suenos.git
   cd interprete-de-suenos
   

2. **Instala las Dependencia**
   ```bash
   npm install

3. **Configura la Clave API**
   Crea un archivo .env en la raíz del proyecto.
   Agrega tu clave API de OpenRouter:
   ```env
   REACT_APP_OPENROUTER_API_KEY=sk-or-v1-tu-clave-api-aqui

4. **Ejecuta la Aplicación**
   ```bash
   npm run dev