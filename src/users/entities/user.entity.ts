import { Exclude } from 'class-transformer';
import { Offer } from 'src/offers/entities/offer.entity';
import { BaseEntity } from 'src/utils/base.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Wishlist } from 'src/wishlistlists/entities/wishlistlist.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  username: string;

  @Column()
  about: string;

  @Column({ default: 'https://i.pravatar.cc/300' })
  avatar: string;

  @Exclude()
  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column({ select: false })
  password: string;

  @OneToMany(() => Wish, (wish) => wish.owner)
  wish: Wish[];

  @OneToMany(() => Offer, (offer) => offer.user)
  offer: Offer[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.owner)
  wishlist: Wishlist[];
}