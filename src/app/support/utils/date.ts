export default class Date {

  public static weekdays (): Array<string> {
    return [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado'
    ]
  }

  public getWeekday (day: number): string {
    return Date.weekdays()[day]
  }
}
