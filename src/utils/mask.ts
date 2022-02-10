export function cpfMask(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

/*
 ** EXEMPLO
 ** const mask = cpfMask("12345678912");
 ** console.log(mask)
 ** SAÍDA: "123.456.789-12"
 */

export function phoneMask(phone: string): string {
  return phone
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?/, '$1');
}

/*
 ** EXEMPLO
 ** const mask = phoneMask("45999381359");
 ** console.log(mask)
 ** SAÍDA: "(45) 99938-1359"
 */

export function dateMask(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\/\d{4})\d+?/, '$1');
}

/*
 ** EXEMPLO
 ** const mask = dateMask("13071997");
 ** console.log(mask)
 ** SAÍDA: "13/07/1997"
 */

export function cepMask(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?/, '$1');
}

export function linkedinMask(value: string): string {
  if (value.includes('linkedin.com')) {
    const username = value.split('/in/')[1];
    return username ? username.split('/')[0] : value;
  }
  return value;
}

export function unmask(value: string | undefined): string | void {
  if (!value) return;
  return value.replace(/[^\d]+/g, '');
}
