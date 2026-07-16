export class PrismaNested {
  static create(data: any) {
    if (data === undefined || data === null) {
      return undefined;
    }

    return {
      create: data,
    };
  }

  static createMany(data: any[]) {
    if (!data || data.length === 0) {
      return undefined;
    }

    return {
      create: data,
    };
  }

  static connect(id?: string) {
    if (!id) return undefined;

    return {
      connect: {
        id,
      },
    };
  }

  static connectOrCreate(id: string, create: any) {
    return {
      connectOrCreate: {
        where: {
          id,
        },

        create,
      },
    };
  }
}
