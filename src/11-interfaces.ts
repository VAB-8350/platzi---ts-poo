interface Driver {
  database: string
  password: string
  port: number

  connect(): void
  disconnect(): void
  isConnected(name: string): boolean
}

class PosgressDriver implements Driver {

  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  public connect(): void {
    // code
  }

  public disconnect(): void {
    // code
  }

  public isConnected(name: string): boolean {
    return true
  }
}
