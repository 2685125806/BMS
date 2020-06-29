package com.bms.bms.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.bms.bms.entity.Users;
import com.bms.bms.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author wx
 * @since 2020-05-08
 */
@RestController
@RequestMapping("/bms/users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    /**
     * 插入或更新用户信息
     * @param openid
     * @param nickname
     * @param gender
     * @param imageUrl
     */
    @GetMapping(value = "/insert")
    public void insertUser(@RequestParam String openid,
                           @RequestParam String nickname,
                           @RequestParam Integer gender,
                           @RequestParam String imageUrl
    ){
        Users users = new Users();
        users.setUOpenid(openid);
        users.setUNickname(nickname);
        users.setUGender(gender);
        users.setUImageUrl(imageUrl);
        users.setGmtCreate(new Date(System.currentTimeMillis()));
        users.setGmtModified(new Date(System.currentTimeMillis()));
        System.out.println("--"+users.getUImageUrl());
        usersService.saveOrUpdate(users);
    }

    /**
     * 根据openid查询用户信息返回到前端
     * @param openid  从小程序端传来的用户openid
     * @return
     */
    @GetMapping(value = "/")
    public Users userInfo(@RequestParam String openid){
        System.out.println(openid+"----");
        QueryWrapper<Users> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("u_openid",openid);
        Users one = usersService.getOne(queryWrapper);
        System.out.println("------根据openid查询--"+one);

        return one;
    }
}

