export const WHATSAPP_NUMBER = '5511912236981'
export const WHATSAPP_DISPLAY = '(11) 91223-6981'
export const INSTAGRAM_HANDLE = '@agenciapontocerto'
export const INSTAGRAM_URL = 'https://instagram.com/agenciapontocerto'

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_ANALYSIS_URL = whatsappUrl('Olá, vi a Ponto Certo e quero uma análise da minha loja.')

export const WHATSAPP_FLOATING_URL = whatsappUrl(
  'Olá, vi a Ponto Certo e gostaria de saber mais sobre o marketing para lojas de veículos.',
)
