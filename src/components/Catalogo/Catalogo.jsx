import { React, useState } from "react";
import ProdutoCatalogo from "../ProdutoCatalogo/ProdutoCatalogo";

import "./Catalogo.css";

const Catalogo = ({ ListaDeProdutos }) => {
  return (
    <section className="catalogo">
      <h1 className="titulo-catalogo">Catálogo</h1>
      <section className="flex-container">
        {ListaDeProdutos.map((item) => (
          <div key={item.id}>
            <ProdutoCatalogo
              id={item.id}
              imagem={item.imagem}
              nome={item.nome}
              preco={item.preco}
            />
          </div>
        ))}
      </section>
    </section>
  );
};
export default Catalogo;
