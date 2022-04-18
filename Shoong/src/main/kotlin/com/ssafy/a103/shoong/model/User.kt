package com.ssafy.a103.shoong.model

import lombok.Getter
import lombok.Setter
//import com.querydsl.core.annotations.QueryEntity
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import java.time.LocalDateTime
import javax.persistence.Entity

@Getter
@Setter
@Entity
//@QueryEntity
@Document(collection = "user")
class User {

    @javax.persistence.Id
    var user_id: String? = null

    @Field("user_phone_number")
    var user_phone_number: String = ""

    @Field("user_email")
    var user_email: String = ""

    @Field("user_password")
    var user_password: String = ""

    @Field("user_nickname")
    var user_nickname: String = ""

    // Nested Object 선언
//    @Field("wallets")
//    var wallets: List<Wallet> = mutableListOf()

//    // Type이 일정하지 않은 가변 Key-Value 오브젝트는 Map으로 선언
//    @Field("dynamicObject")
//    var dynamicObject: Map<String, Any> = mutableMapOf()

    @Field("createdAt")
    var createdAt: LocalDateTime = LocalDateTime.now()

    @Field("updatedAt")
    var updatedAt: LocalDateTime? = null

    @Field("deletedAt")
    var deletedAt: LocalDateTime? = null
}

@Getter
@Setter
@Entity
//@QueryEntity
class Wallet {
    @javax.persistence.Id
    var wallet_id: String? = null

    @Field("wallet_name")
    var wallet_name: String = ""

    @Field("wallet_address")
    var wallet_address: String = ""

    @Field("createdAt")
    var createdAt: LocalDateTime = LocalDateTime.now()

    @Field("updatedAt")
    var updatedAt: LocalDateTime? = null

    @Field("deletedAt")
    var deletedAt: LocalDateTime? = null
}