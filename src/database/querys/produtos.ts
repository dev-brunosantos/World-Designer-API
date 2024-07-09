export const FiltrarProdutoCategorias = `
    SELECT p.id_produto, p.produto, c.categoria, p.descricao, p.preco 
    FROM produtos p, categorias c 
    WHERE p.id_categoria = c.id_categoria AND c.categoria = 
`;