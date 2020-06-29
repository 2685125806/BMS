package com.bms.bms.service.impl;

import com.bms.bms.entity.Users;
import com.bms.bms.mapper.UsersMapper;
import com.bms.bms.service.UsersService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author wx
 * @since 2020-05-24
 */
@Service
public class UsersServiceImpl extends ServiceImpl<UsersMapper, Users> implements UsersService {

}
