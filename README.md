# Proyecto Final: Web App de E-commerce

## Descripción

Desarrollo del Front End de una SPA de e-commerce con React, Firebase y Context API para la gestión del carrito.

## Tecnologías

- React (UI y SPA)
- React Router (navegación sin recargas)
- Firebase Firestore (base de datos)
- Context API (estado global)
- CSS/SASS/Bootstrap/Material UI (estilos)

## Funcionalidades

- Productos: Listado dinámico, vista detallada y validaciones de stock.
- Carrito: Estado global, visualización de productos y total de compras.
- Navegación: Entre catálogo, categorías, detalle, carrito y checkout.
- Firebase: Gestión de productos y registro de compras.
- UX: Mensajes condicionales y confirmación de compra con ID de orden.

## Estructura de Componentes

```
App
│── NavBar (CartWidget)
│── ItemListContainer (ItemList > Item)
│── ItemDetailContainer (ItemDetail > ItemCount)
│── Cart (CartItem)
│── CheckoutForm
```
