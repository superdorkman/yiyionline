export const toCn = (game) => {
  switch (game) {
    case 'dnf':
      return '地下城与勇士';
    case 'jx3':
      return '剑网3';
    case 'lsqy':
      return '灵山奇缘';
    case 'nsh':
      return '逆水寒';
    case 'gjol':
      return '古剑奇谭';
  }
}

export const getType = (model, game) => {
  let type = model.replace(new RegExp(game, 'i'), '');
  type = type.replace(/Fast|Activity/, '').toLowerCase();
    
  return type;
}