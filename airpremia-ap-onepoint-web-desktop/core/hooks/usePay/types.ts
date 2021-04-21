export interface IApgParameter {
  /** 결제 타입 */
  methodType: string;
  /** 국내 신용카드별 카드코드 */
  cardCode: string;
  /** 팝업에 나오는 제목 */
  title: string;
  /** 통화 */
  currency: string;
  /** 전체 승인 요청 금액 */
  totalAmount: number;
  /** 세금 */
  taxAmount: number;
  /** 상품명 */
  productName: string;
  /** 할부개월 */
  installments: number;
  /** eximbay 결제자명 */
  buyer?: string;
  /** eximbay 결제자 이메일 */
  email?: string;
}
